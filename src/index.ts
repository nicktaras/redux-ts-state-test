
import { createStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';

// Redux Default States
// Default states are flexible using any data type and structure you need,
// which can be derived from data sync/async.

const defaultCarState = {
  isCarOpenState: false,
  areCarWindowsOpenState: false,
  controlMusicVolumeState: 0
};

const viewStateOptions = ['welcome', 'locks', 'sound']
const defaultViewState = 'welcome';

// Dispatch Actions to Stores
// Actions are unique 'STRINGS' that instruct Redux which action(s) to perform.
// The "Actions" role is the event messenger between a UI event and Redux Stores.

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
// This is a custom implementation, to manage the UI logic for views and the car events.

const viewController = (viewType:string) => {
  viewStateOptions.forEach(( item:any ) => {
    if(viewType === item) {
      document.getElementById(item).style.display = 'block';
    } else {
      document.getElementById(item).style.display = 'none';
    }
  })
}

const carController = {
  musicVolumeController: (vol:number) => {
    document.getElementById('controlMusicVolumeState').innerHTML = vol.toString();
  },
  carLockController: (state:boolean) => {
    document.getElementById('isCarOpenState').innerHTML = state ? 'open' : 'closed';
  },
  windowsOpenController: (state:boolean) => {
    document.getElementById('areCarWindowsOpenState').innerHTML = state ? 'open' : 'closed';
  }
}

// Redux Reducers (State Handlers)
// The reducers role is to listen to 'Action' events and reduce the new state into current.
// Extension libraries or logic can be added to keep track of the previous state(s) (https://redux.js.org/usage/implementing-undo-history)

function viewReducer(state = defaultViewState, action:any) {
  switch (action.type) {
    case 'SET_VIEW':
      viewController(action.payload);
      return action.payload;
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
      carController.carLockController(state.isCarOpenState);
      return state;
    case 'TOGGLE_WINDOWS':
      state.areCarWindowsOpenState = !state.areCarWindowsOpenState;
      carController.windowsOpenController(state.areCarWindowsOpenState);
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
      carController.musicVolumeController(state.controlMusicVolumeState);
      return state;
    default:
      // Init
      carController.carLockController(state.isCarOpenState);
      carController.windowsOpenController(state.areCarWindowsOpenState);
      carController.musicVolumeController(state.controlMusicVolumeState);
      return state;
  }
}

// Log Changes
// Hooks can be added to keep track of events for logging of subscribing to store changes.
// This could be used for analytics as an example.

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