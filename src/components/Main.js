import React from 'react';
import Graph from './graph'
import Header from './header'
import Ranking from './ranking'
import Footer from './footer'
function Main() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <div className="graph-main">
          <Ranking></Ranking>
          <Graph></Graph>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Main;
