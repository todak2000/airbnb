import './main.css';
import Tabs from './Tabs';
import Button from '../../Components/Button';
import React, { useState, useEffect } from 'react';
import { sharedHomesData, OMGData, LakeData, BeachData } from './data';
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";
import Card from '../../Components/Card';
import { TabData } from './data';

function Main() {
    const [currentData, setCurrentData] = useState([])
    const [activeTab, setActiveTab] = useState("Shared homes")
    const handleTabClick = (tabValue)=>{
        setActiveTab(tabValue)
        switch (tabValue) {
            case "OMG!":
                setCurrentData(OMGData)
                break
            case "Beach":
                setCurrentData(BeachData)
                break
            case "Lake":
                setCurrentData(LakeData)
                break
            case "Countryside":
                setCurrentData(sharedHomesData)
                break
            case "Iconic cities":
                setCurrentData(BeachData)
                break
            case "Design":
                setCurrentData(LakeData)
                break   
            
            case "Bed & breakfasts":
                setCurrentData(OMGData)
                break
            case "Mansions":
                setCurrentData(BeachData)
                break
            case "Amazing pools":
                setCurrentData(LakeData)
                break
            case "Caves":
                setCurrentData(sharedHomesData)
                break
            case "Tropical":
                setCurrentData(BeachData)
                break
            case "Islands":
                setCurrentData(LakeData)
                break   

            case "Tiny homes":
                setCurrentData(BeachData)
                break
            case "Artic":
                setCurrentData(LakeData)
                break
            case "National parks":
                setCurrentData(sharedHomesData)
                break
            case "Cycladic homes":
                setCurrentData(BeachData)
                break
            case "Cabins":
                setCurrentData(LakeData)
                break 
            case "Boats":
                setCurrentData(BeachData)
                break 
            default:
                setCurrentData(sharedHomesData)
            
        }
    }
    const handleLike = (id)=>{
       let  updatedData = currentData.map(item =>{
        if (item.id === id) {
            let likeStatus = item.like
            return {...item, like: !likeStatus }
        }
        return item;
       })
       setCurrentData(updatedData)
        
    }
    useEffect(()=>{
        setCurrentData(sharedHomesData)
    }, [])
  return (
    <div className="main-container">
        {/* main tabs */}
       <div className='row-between sticky'>
            <span className='chevron desktop'>
                <CiCircleChevLeft  size={40} color="#717171"/>
            </span>
            <Tabs data={TabData} activeTab={activeTab} handleTabClick={handleTabClick}/>
            <span className='chevron desktop'>
                    <CiCircleChevRight size={40} color="#717171" style={{marginRight:20}}/>
            </span>
            <span className='desktop'><Button /></span>
       </div>
       {/* main tabs ends*/}
       
       {/* card div */}
       <div className='card-div'>
        {currentData.map((data, index )=>{
            return (
                <Card data={data} key={index} handleLike={handleLike}/>
            )
        })}
       </div>
       {/* card div ends*/}
    </div>
  );
}

export default Main;
