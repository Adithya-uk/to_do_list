import React from  'react';
import {Switch , Route} from "react-router-dom";
import FormLogin from './FormLogin';
import AddTask from './AddTask';
import Form from './Form';
import DailyTask from './DailyTask';
import WeeklyTask from './WeeklyTask';
import ViewToday from './ViewToday';
import ViewWeek from './ViewWeek';
import Due from './Due';
import RemTask from './RemTask';
import Lform from './Lform';
import Today from './Today'
import ViewDue from './ViewDue';
// import Signup from './pages/Signup';

function Routes(){
    return(
        <Switch>
            <Route exact path = "/login">
                <FormLogin />
            </Route>

            

            <Route exact path = "/formlogin">
                <Lform />
            </Route>

            <Route exact path = "/viewdue">
                <ViewDue />
            </Route>

            <Route exact path = "/addtask">
                <AddTask />
            </Route>

            <Route exact path = "/">
                <Form />
            </Route>

            <Route exact path = "/dailytask">
                <DailyTask />
            </Route>

            <Route exact path = "/weeklytask">
                <WeeklyTask />
            </Route>

            <Route exact path = "/viewtoday">
                <ViewToday />
            </Route>

            <Route exact path = "/viewweek">
                <ViewWeek />
            </Route>

            <Route exact path = "/due">
                <Due />
            </Route>

            <Route exact path = "/today">
                <Today />
            </Route>

            <Route exact path = "/remtask">
                <RemTask />
            </Route>

        </Switch>
    );
}
export default Routes;