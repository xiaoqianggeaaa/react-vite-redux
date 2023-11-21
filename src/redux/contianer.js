export const mapStateToProps = (state) => {
    console.log(state)
    return {
      ...state
    }
}
export const mapDispatchToProps = (dispatch) => ({

    dispatch: dispatch,
    increment: (number) => {
      dispatch({ type: 'INCREMENT' ,data:{AA:"CC",bb:'xxx'}});
    },
    incrementAsync: (number) => {
      dispatch(createIncrementAsyncAction(number, 500));
    },
    decrement: (number) => {
      dispatch(createDecrementAction(number));
    },
  });