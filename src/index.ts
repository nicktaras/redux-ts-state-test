
import { createStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';

// Redux Default States

const defaultCarState = {
  isCarOpenState: false,
  areCarWindowsOpenState: false,
  controlMusicVolumeState: 0
};

const viewStateOptions = ['welcome', 'locks', 'sound']
const defaultViewState = 'welcome';

// Dispatch Actions to Stores

// @ts-ignore
window.navClickHandler = (event:any) => {
  store.dispatch({ type: 'SET_VIEW', payload: event.currentTarget.dataset.nav });  
};

// @ts-ignore
window.windowClickHandler = (event:any) => {
  store.dispatch({ type: 'TOGGLE_WINDOWS' });  
};

// @ts-ignore
window.lockClickHandler = (event:any) => {
  store.dispatch({ type: 'TOGGLE_LOCK' });  
};

// @ts-ignore
window.volClickHandler = (event:any) => {
  store.dispatch({ type: 'SET_MUSIC_VOUME', payload: event.currentTarget.dataset.vol });
};

// View Controllers 

const viewController = (viewType:string) => {
  viewStateOptions.forEach(( item:any ) => {
    if(viewType === item) {
      document.getElementById(item).style.display = 'block';
    } else {
      document.getElementById(item).style.display = 'none';
    }
  })
}

const musicVolumeController = (vol:number) => {
  document.getElementById('controlMusicVolumeState').innerHTML = vol.toString();
}

const carLockController = (state:boolean) => {
  document.getElementById('isCarOpenState').innerHTML = state ? 'open' : 'closed';
}

const windowsOpenController = (state:boolean) => {
  document.getElementById('areCarWindowsOpenState').innerHTML = state ? 'open' : 'closed';
}

// Redux Reducers (State Handlers)

function viewReducer(state = defaultViewState, action:any) {
  switch (action.type) {
    case 'SET_VIEW':
      state = action.payload;
      viewController(state);
      return state;
    default:
      // Init
      viewController(state);
      return state;
  }
}

function carReducer(state = defaultCarState, action:any) {
  switch (action.type) {
    case 'TOGGLE_LOCK':
      state.isCarOpenState = !state.isCarOpenState;
      carLockController(state.isCarOpenState);
      return state;
    case 'TOGGLE_WINDOWS':
      state.areCarWindowsOpenState = !state.areCarWindowsOpenState;
      windowsOpenController(state.areCarWindowsOpenState);
      return state;
    case 'SET_MUSIC_VOUME':
      if(action.payload == '1') {
        state.controlMusicVolumeState++;
      } else if(
        state.controlMusicVolumeState > 0 && 
        action.payload == '-1'
      ) {
        state.controlMusicVolumeState--;
      }
      musicVolumeController(state.controlMusicVolumeState);
      return state;
    default:
      // Init
      carLockController(state.isCarOpenState);
      windowsOpenController(state.areCarWindowsOpenState);
      musicVolumeController(state.controlMusicVolumeState);
      return state;
  }
}

// Log Changes

function logger({ getState }: any) {
  return (next: any) => (action: any) => {
    console.log('will dispatch', action);
    const returnValue = next(action);
    console.log('state after dispatch', getState());
    return returnValue;
  }
}

const rootReducer = combineReducers({ 
  viewReducer, 
  carReducer, 
  // lastAction
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger)
  )
);

// To listen to / manage events
// const lastAction = (state:any, action:any) => { return action };
// const unsubscribe = store.subscribe(() => { console.log(store.getState().lastAction) });