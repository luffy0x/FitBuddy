import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { workouts, milestones } from './data/mockData';
import WorkoutCard from './components/WorkoutCard';
import MilestoneCard from './components/MilestoneCard';

const DOC_URL='https://docs.qq.com/sheet/DZWVTeEhWR2V0cFBE?tab=BB08J2';

function App(){
 return <main className="app">
  <header>
   <h1>🏋️ FitBuddy</h1>
   <p>你的 AI 健身搭子，记录每一次训练与成长</p>
  </header>

  <section className="cards">
   <div>🔥 连续训练<br/><b>23 天</b></div>
   <div>💪 本月训练<br/><b>12 次</b></div>
   <div>🏆 最近突破<br/><b>卧推 80kg</b></div>
  </section>

  <section>
   <h2>📅 Training Calendar</h2>
   <div className="calendar">
    {Array.from({length:30},(_,i)=><div className="day" key={i}>{i+1}<br/>{[5,8,12].includes(i+1)?'🏋️':''}</div>)}
   </div>
  </section>

  <section>
   <h2>📝 Workout Log</h2>
   {workouts.map(item=><WorkoutCard key={item.date} workout={item}/>) }
  </section>

  <section>
   <h2>🏆 Milestones</h2>
   {milestones.map(item=><MilestoneCard key={item.date} item={item}/>) }
  </section>

  <section className="ai-box">
   <h2>🤖 FitBuddy AI</h2>
   <p>输入自然语言训练记录，WorkBuddy 自动整理并沉淀到腾讯文档。</p>
   <div className="example">今天练胸，上斜32kg三组，卧推60/70/80kg，帮我记录。</div>
   <button>✨ 使用 WorkBuddy 整理训练记录</button>
  </section>

  <section className="doc-box">
   <h2>📄 FitBuddy 成长档案</h2>
   <p>腾讯文档保存训练日志、里程碑和阶段成长总结。</p>
   <a href={DOC_URL} target="_blank" rel="noreferrer"><button>打开腾讯文档档案</button></a>
  </section>
 </main>
}

createRoot(document.getElementById('root')).render(<App/>);
