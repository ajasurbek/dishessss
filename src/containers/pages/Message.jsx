import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

const Message = () => {
    const { path, url } = useRouteMatch();
    return (
        <>
        <div>
      <ul>
        <li>
          <Link className='new-link' to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        {/* <li>
          <Link className='new-link' to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link className='new-link' to={`${url}/props-v-state`}>Props v. State</Link>
        </li> */}
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3 className='bg'>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/topicId`}>
            <h1>topics</h1>
        </Route>
        <Route path={`${path}/components`}>
            <h1>component</h1>
        </Route>
      </Switch>
    </div>
        </>
    )
}
export default Message