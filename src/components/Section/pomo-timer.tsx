"use client"

import { Brain, Coffee, Pause, Play, RotateCcw, Settings, Timer, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import { Badge } from "../ui/badge";

type timerMode = "work" | "shortBreak" | "longBreak"

interface TimerSettings{
    work:number;
    shortBreak:number;
    longBreak:number;
}

export default function PomoTimer() {
    const [mode, setMode] = useState<timerMode>("work");
    const [timerLeft, setTimerLeft] = useState(25*60);
    const [isRunning, setIsRunning] = useState(false);
    const [sessions, setSessions] = useState(0);
    const [settings, setSettings] = useState<TimerSettings>({
        work:25,
        shortBreak:5,
        longBreak:15
    })

    const [soundEnabled, setSoundEnabled] = useState(true);
    const intervalref = useRef<NodeJS.Timeout | null>(null);

    const modeConfig = {
        work: {
            label:"Focus Time",
            icon: Brain,
            color:"bg-red-500",
            bgGradient:"from-red-500 to-pink-600",
            duration: settings.work * 60,
        },
        shortBreak:{
            label:"Short Break",
            icon: Coffee,
            color: "bg-green-500",
            bgGradient:"from-green-500 to-emerald-600",
            duration: settings.shortBreak * 60,
       },
       longBreak: {
        label: "Long Break",
        icon: Timer,
        color: "bg-sky-400",
        bgGradient:"from-sky-400 to-indigo-600",
        duration: settings.longBreak * 60,
       }

    };

    const playNotificationSound = () => {
        const audioContext = new (window.AudioContext || (window as any ).webkitAudioContext())
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination)

        oscillator.frequency.value = 800;
        oscillator.type = "sine";

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);

        oscillator.start(audioContext.currentTime);
        oscillator.stop (audioContext.currentTime + 0.5);
    }

    const handleTimerComplete = () => {
        setIsRunning(false);
        if(mode === "work"){
            setSessions((prev) => prev + 1);
            const nextMode = sessions > 0 && (sessions + 1) % 4 === 0 ? "longBreak" : "shortBreak"
            setMode(nextMode)
            setTimerLeft(modeConfig[nextMode].duration)
        }else{
            setMode("work");
            setTimerLeft(modeConfig.work.duration);
        }

        if(soundEnabled){
            playNotificationSound()
        }
    }

    useEffect(() => {
        if(isRunning && timerLeft > 0){
            intervalref.current = setInterval (() => {
                setTimerLeft((prev) => prev - 1);
            }, 1000)
        }else if(timerLeft === 0){
            handleTimerComplete()
        }else{
            if(intervalref.current){
             clearInterval(intervalref.current);
            }
        }

        return () => {
            if(intervalref.current){
                clearInterval(intervalref.current)
            }
        }

        
    }, [isRunning, timerLeft])

    const toggleTimer = () => {
        setIsRunning(!isRunning)
    }

    const resetTimer = () => {
        setIsRunning(false);
        setTimerLeft(modeConfig[mode].duration);
    }

    const switchMode = (newMode : timerMode) => {
        setMode(newMode);
        setTimerLeft(modeConfig[newMode].duration);
        setIsRunning(false);
    }

    const updateSettings = (newSettings : TimerSettings) => {
        setSettings(newSettings);
        setTimerLeft(newSettings[mode] * 60)
        setIsRunning(false);

    } 

    const formatTime = (seconds : number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }

    const progress = ((modeConfig[mode].duration - timerLeft) / modeConfig[mode].duration) * 100
    
    const currConfig = modeConfig[mode];

    const IconComponent = currConfig.icon

    return(
        <div className={`min-h-screen bg-gradient-to-br ${currConfig.bgGradient} p-4 transition-all duration-1000 py-20 `}>
            <div className="max-w-md mx-auto space-y-6">
                <div className="text-center text-white dark:text-white space-y-2">
                    <h1 className="font-bold text-4xl">Pomodoro Timer</h1>
                    <p className="font-second ">Stay Focus</p>
                </div>

                {/*Mode Select */}
                <div className="flex gap-2 p-1 bg-white/20 rounded-lg backdrop-blur-sm">
                    {(Object.keys(modeConfig) as timerMode[]).map((modeKey) => {
                        const config = modeConfig[modeKey]
                        const ModeIcon = config.icon
                        
                        return (
                            <button
                            key={modeKey}
                            onClick = {() => switchMode(modeKey)}
                             className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-all
                             ${mode === modeKey ? "bg-white text-gray-600" : "text-white/80 hover:text-white hover:ng-white/10"}`}>
                            <ModeIcon className="w-4 h-4"/>
                            <span className="hidden sm:inline">{config.label}</span>
                            
                            </button>
                        )
                    })}
                </div>

                <Card className="bg-white/20 backdrop-blur-sm">
                    <CardContent className="p-8">
                        <div className="text-center space-y-6">
                            <div className="relative mx-auto w-48 h-48">
                                <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100" >
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="8"/>
                                    <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    strokeWidth="8"
                                    fill="none"
                                    stroke="white"
                                    strokeLinecap="round"
                                    strokeDasharray={`${2 * Math.PI * 45}`}
                                    strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                                    className="transition-all duration-1000 ease-out"/>
                                </svg>
                                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
                                    <IconComponent className="w-8 h-8 mb-4"/>
                                    <div className="font-bold text-3xl ">{formatTime(timerLeft)}</div>
                                    <div className="text-sm">{currConfig.label}</div>
                                </div>
                            </div>
                            
                            <div className="flex gap-4 items-center justify-center">
                                <Button
                                className="bg-white hover:bg-white/20"
                                size={'lg'}
                                onClick={toggleTimer}>
                                    {isRunning ? <Pause className="w-4 h-4 text-black"/> : <Play className="w-4 h-4 text-black"/> }
                                </Button>
                                <Button className="bg-white/20 hover:bg-gray-600"
                                size={'lg'}
                                onClick={resetTimer}>
                                    <RotateCcw className="w-4 h-4"/>
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-white/20 backdrop-blur-md">
                        <CardContent>
                            <div className="p-4 text-center text-white">
                                <div className="text-2xl font-bold">{sessions}</div>
                                <div className="text-sm">Sessions</div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-white/20 backdrop-blur-md">
                        <CardContent>
                            <div className="p-4 text-center text-white">
                                <div className="text-2xl font-bold">{Math.floor((sessions * settings.work) / 60)} h {Math.floor((sessions * settings.work)%60)} m</div>
                                <div className="text-sm">Focus Time</div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex justify-center gap-4">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="bg-white/20 bakcdrop-blur-md">
                                <Settings className="w-10 h-10 mr-2"/>
                                Settings
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Timer Settings</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label>Work Duration: {settings.work}</Label>
                                    <Slider
                                    value={[settings.work]}
                                    onValueChange={([value]) => updateSettings(
                                        {...settings,
                                            work:value
                                        }
                                    )}
                                    min={1}
                                    step={1}
                                    max={60}/>
                                </div>
                                <div className="space-y-2">
                                    <Label>Short Break: {settings.shortBreak}</Label>
                                    <Slider
                                    value={[settings.shortBreak]}
                                    onValueChange={([value]) => updateSettings({...settings, shortBreak:value})}
                                    min={1}
                                    step={1}
                                    max={60}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Long Break: {settings.longBreak}</Label>
                                    <Slider
                                    value={[settings.longBreak]}
                                    onValueChange={([value]) => updateSettings({...settings, longBreak:value})}
                                    min={1}
                                    step={1}
                                    max={60}
                                    />
                                </div>

                            </div>
                        </DialogContent>
                    </Dialog>
                
                    <Button
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className="border-white/20 hover:bg-white/20"
                    variant={"outline"}>
                        {soundEnabled ? <Volume2 className="w-4 h-4 mr-2"/> : <VolumeX className="w-4 h-4 mr-2"/>}
                        Sound
                    </Button>
                </div>

                <div className="text-center justify-center font-semibold ">
                <Badge className="bg-white/20 text-sm">
                    {isRunning ? "Timer Running" : "Timer Paused"}
                </Badge>
                </div>
            </div>
        </div>
    )
}