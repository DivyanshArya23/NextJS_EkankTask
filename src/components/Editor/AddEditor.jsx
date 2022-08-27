import React, { Fragment, useEffect, useRef, useCallback } from 'react';
import cns from 'classnames';
import { v4 } from 'uuid';
import cls from './AddEditor.module.scss';
import { editorOptions, EDITOR_TYPES } from '../../config';

const AddEditor = ({ index, setEditorList }) => {
  const optionRef = useRef();

  const closeMenu = useCallback(
    (e) => {
      e.stopPropagation();
      if (optionRef?.current?.classList?.contains('d-block')) {
        optionRef?.current?.classList.remove('d-block');
        optionRef?.current?.classList.add('d-none');
      }
    },
    [optionRef.current]
  );

  useEffect(() => {
    window.addEventListener('click', closeMenu);
    return () => {
      window.removeEventListener('click', closeMenu);
    };
  }, []);

  const handleOptionClick = useCallback(
    (value) => {
      let newObj;
      if (value === EDITOR_TYPES.TEXT) {
        newObj = { id: v4(), type: value, value: index };
      } else if (value === EDITOR_TYPES.IMAGE) {
        newObj = { id: v4(), type: value, value: '/images/turtle.jpg' };
      }

      if (newObj) {
        setEditorList((editorList) => {
          const newList = [...editorList];
          newList.splice(index + 1, 0, newObj);
          return newList;
        });
      }
    },
    [setEditorList]
  );

  return (
    <div className="d-flex px-3 align-items-center">
      <span className="position-relative">
        <i
          title="Click to add Block"
          className={cns(cls.addBtn, 'bi bi-plus-circle')}
          onClick={(e) => {
            e.stopPropagation();
            optionRef?.current?.classList.add('d-block');
            optionRef?.current?.classList.remove('d-none');
          }}
        ></i>
        <div ref={optionRef} className={cns('d-none', cls.optionBox)}>
          <OptionMenu handleOptionClick={handleOptionClick} />
        </div>
      </span>
    </div>
  );
};

export default React.memo(AddEditor);

const OptionMenu = ({ handleOptionClick }) => {
  return (
    <>
      <div className={cns(cls.optionMenu)}>
        <div className={cns(cls.title)}>Choose</div>
        {editorOptions.map((opt, index) => (
          <Fragment key={index}>
            <div
              className={cns(cls.option)}
              onClick={() => {
                handleOptionClick(opt.value);
              }}
            >
              <div className={cns('d-flex')}>
                <div className={cns('flex-column', cls.image)}></div>
                <div className={cns('flex-column', cls.detail)}>
                  <div className={cns(cls.label)}>{opt.label}</div>
                  <small className={cns(cls.desc)}>{opt.description}</small>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
};
