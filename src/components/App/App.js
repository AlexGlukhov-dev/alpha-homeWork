import './App.css';
import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {fetchAppData} from "../../redux/slices/appData";
import GoodsList from "../GoodsList/GoodsList";
import SortCards from "../SortCards/SortCards";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAppData())
  }, [])

  return (
    <div className="App container">
      <SortCards />
      <GoodsList />
    </div>
  );
}

export default App;
