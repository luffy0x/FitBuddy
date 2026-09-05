import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const DOC_URL='https://docs.qq.com/sheet/DZWVTeEhWR2V0cFBE?tab=BB08J2';

const logs = [
  {date:'2026-09-05',part:'胸',content:'上斜哑铃 30kg×3\n卧推 60kg×2 70kg×2 80kg×2',note:'首次完成80kg卧推突破',photo:'📷 健身房训练照'},
  {date:'2026-09-08',part:'背',content:'硬拉 100kg×5\n划船 40kg×4',note:'力量提升',photo:'📷 运动记录截图'},
  {date:'2026-09-12',part:'腿',content:'深蹲 80kg×5\n腿举 120kg×4',note:'完成阶段训练目标',photo:'📷 腿部训练记录'}
];

const calendar=['','','🏋️','','','🏋️','','','🏋️','','',''];

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
    {Array.from({length:30},(_,i)=><div className="day" key={i}>{i+1}<br/>{calendar[i%calendar.length]}</div>)}
   </div>
  </section>

  <section>
   <h2>📝 Workout Log</h2>
   {logs.map(x=><article className="log" key={x.date}>
    <h3>{x.date} · {x.part}</h3>
    <pre>{x.content}</pre>
    <p>{x.note}</p>
    <div className="photo">{x.photo}</div>
   </article>)}
  </section>

  <section>
   <h2>🏆 Milestones</h2>
   <article className="milestone">
    <b>2026.09.05 卧推突破80kg</b>
    <p>经过持续训练，实现阶段性力量突破。</p>
    📷 突破记录照片
   </article>
  </section>

  <section className="ai-box">
   <h2>🤖 FitBuddy AI</h2>
   <p>输入训练记录，让 WorkBuddy 自动整理并沉淀到腾讯文档。</p>
   <div className="example">今天练胸，上斜30kg三组，卧推60/70/80kg，帮我记录。</div>
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