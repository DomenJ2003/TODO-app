import { TODO_CHANGE_STATUS, TODO_DELETE } from "../actions/types";
import { useDispatch } from "react-redux";

const CheckStatus = ({ done, dispatch, ident }) => {
  if (done) {
    return (
      <i
        onClick={() =>
          dispatch({
            type: TODO_CHANGE_STATUS,
            payload: {
              ident,
              done: false,
            },
          })
        }
        className="fas fa-check-square fa-3x"
        style={{ color: "green" }}
      ></i>
    );
  }
  return <i
  onClick={() =>
    dispatch({
      type: TODO_CHANGE_STATUS,
      payload: {
        ident,
        done: true,
      },
    })} className="far fa-check-square fa-3x"></i>;
};

function Card({ todo }) {
  const date = new Date(todo.date_created);
  const dispatch = useDispatch();
  return (
    <div className="col-xl-4 col-lg-6 mb-4">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <CheckStatus done={todo.done} dispatch={dispatch} ident={todo.ident} />
              <div className="ms-3">
                <p className="fw-bold mb-1">{todo.title}</p>
                <p className="text-muted mb-0">{todo.description}</p>
              </div>
            </div>
            <span className="badge rounded-pill badge-primary">
              {date.toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="card-footer border-0 bg-light p-2 d-flex justify-content-around">
          <a
            className="btn btn-link m-0 text-reset"
            href="#"
            role="button"
            data-ripple-color="primary"
          >
            Edit<i className="fas fa-edit ms-2"></i>
          </a>
          <a
            className="btn btn-link m-0 text-reset"
            href="#"
            role="button"
            data-ripple-color="primary"
            onClick={() => dispatch({ type: TODO_DELETE, payload: todo.ident })}
          >
            Delete<i className="fas fa-trash ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
