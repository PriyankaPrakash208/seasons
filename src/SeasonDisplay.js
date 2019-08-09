import './SeasonDisplay.css'; 
import React from 'react';


const seasonConfig = {
    summer:{
        text:"Let's hit the beach!",
        iconName:"sun outline"
    },
    winter:{
        text:"Brr, It is chilling !",
        iconName: "snowflake"
    }
}

const getSeasons = (lat, month) => {
    if(month > 2 && month < 6){
        return lat > 0 ? 'summer' : 'winter';
    }
    else{
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeasons(props.lat, new Date().getMonth());
    console.log(season);
  
    const {text,iconName}  = seasonConfig[season] ;

    return <div className={`season-display ${season}`}>
                <i className={`${iconName} icon-left icon massive`}  />
                <h1 className="">{text}</h1>
                <i className={`${iconName} icon-right icon massive`} />

        
            </div>;
};

export default SeasonDisplay;