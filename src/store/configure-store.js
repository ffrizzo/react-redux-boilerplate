import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'

export default function configureStore(history, initialState) {
    let devTools = []
    if (__DEBUG__ ) {
      if (window.devToolsExtension){
        //If devToolsExtension is present
        //configure to use extension
        devTools = [ window.devToolsExtension() ]
      }else{
        devTools = [ require('containers/dev-tools').instrument() ]
      }
    }

    let middlewares = [ thunk, routerMiddleware(history) ]

    const store = createStore(
        rootReducer,
        initialState,
        compose(
          applyMiddleware(...middlewares),
          ...devTools
        )
    )

    if(module.hot){//Hot reload for development mode
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}
