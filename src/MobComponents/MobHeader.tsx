import React, { useEffect, useState } from 'react'
import { HeaderContainer, HeaderMainCon } from './skins'

export default function MobHeader() {
    const [name, setName] = useState<string>("");
    const [workTitle, setworkTitle] = useState<string>("");
    const [countDown, setCountDown] = useState(0);
    const [countDownTitle, setCountDownTitle] = useState(0);
    const FullName = 'YOGENDRA K'

    useEffect(()=> {
        const NameArray:any = [name]
        const workArray = ['FRONT-END', 'FULL-STACK', 'DESIGNER','FREE-LANCER'];
        if (countDown === FullName.length){
            setTimeout(() => {
                setCountDown(0);
                setName("");
            }, 2000);
        } else {
            setTimeout(()=> {
                setCountDown(countDown+1);
                NameArray.push(FullName[countDown])
                setName(NameArray);
            },400)
        }

        if (countDownTitle === workArray.length){
            setCountDownTitle(0);
        }else {
            setCountDownTitle(countDownTitle+1);
            setworkTitle(workArray[countDownTitle])
        }
    }, [countDown, name])

  return (
    <HeaderContainer>
        <HeaderMainCon>
                <section>
                    {name}
                </section>
                <section>
                {workTitle}
                </section>
                <section>
                WEB DEVELOPER
                </section>
        </HeaderMainCon>
    </HeaderContainer>
  )
}

