import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import RouteWithLayout  from './RouteWithLayout';
import { routes } from './route';
// const Login = lazy(() => import('../components/login'));
// const Dashboard = lazy(() => import('../components/dashboard'));
import Layout from '../component/layout'

const RouterApp = (props) => {
    return (
        <div className="App">
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Layout>

                        {
                            routes.map((v, k) => {
                                    return (
                                        <Route key={k} path={v.path} component={v.component} exact={true} />
                                    )
                            })
                        }
                        </Layout>
                    </Switch>
                </Suspense>
            </Router>
        </div>
    )
}



export default RouterApp; 