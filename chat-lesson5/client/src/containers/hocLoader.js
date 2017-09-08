import React, { Component } from 'react';

// функия, которая принимает компонент и возвращает новый компонент
// добавляем компоненту функционал без механизма наследования

// по сути мы не имзменяем компонент, а просто обернули его в новый компонент

// безымянный компонент class extends Component должен передать свойства
// компоненту который он оборачивает и делаем это при помощи {...this.props}

// export default function hocLoader(ChildComponent) {

export default (propName) => (loaderPath) => (ChildComponent) => {
  class HOCLoader extends Component {

    propIsEmpty() {
      const prop = this.props[propName];

      if ( !prop ||
          ( prop.hasOwnProperty('length') && !prop.length ) ||
          (!Object.keys(prop).length)
      ) {
        return true;
      }

      return false;
    }

    loaderComponent() {
      return <img src={loaderPath} alt=""/>
    }

    render() {
      return (
        this.propIsEmpty() ? this.loaderComponent() : <ChildComponent {...this.props} />
      )
    }
  }

  HOCLoader.displayName = `HOCLoader(${ChildComponent.displayName || ChildComponent.name || 'ChildComponent'}})`

  return HOCLoader;
}
