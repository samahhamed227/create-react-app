import React from 'react';
import HornedBeasts from './HornedBeasts';
import horned from '../assets/data.json';
class Main extends React.Component {

  render() {
    return (
      <div >
        {horned.map(i=>{
          return(
            <HornedBeasts  title={i.title} descriptions={i.description} imagurl={i.image_url}  horns={i.horns} />
          );
        })
      }

      </div>
    );
  }
}

export default Main;