export default function courseReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_COURSE':
    // can not do this way as it will mutante the state
    /*state.push(action.course);
    return state;*/

    return [...state,
      Object.assign({}, action.course)
    ];

    default:
    return state;
  }
}
