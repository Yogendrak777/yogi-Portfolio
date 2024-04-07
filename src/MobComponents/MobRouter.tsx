import React from 'react'
import MobNavBar from './MobNavBar';
import MobHeader from './MobHeader';
import MobAboutMe from './MobAboutMe';
import MobSkills from './MobSkills';
import MobProjects from './MobProjects';
import MobContactMe from './MobContactMe';
import MobFooter from './MobFooter';

export default function MobRouter() {
  return (
    <>
      <MobNavBar/>
      <MobHeader/> 
      <MobAboutMe/> 
      <MobSkills/>
      <MobProjects/>
      <MobContactMe/>
      <MobFooter/>
    </>
  )
}
