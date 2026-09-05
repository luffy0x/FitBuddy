import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const logs=[
 {date:'2026-09-05',part:'胸',content:'上斜哑铃 30kg×3\n卧推 60kg×2 70kg×2 80kg×2',note:'首次完成80kg卧推'},
 {date:'2026-09-08',part:'背',content:'硬拉 100kg×5\n划船 40kg×4',note:'力量提升'}
];

function App(){return <div className="app">
<h1>🏋️ FitBuddy</h1><p>你的 AI 健身搭子，记录每一次突破</p>
<div className="cards"><div>🔥 连续训练<br/><b>23 天</b></div><div>💪 本月训练<br/><b>12 次</b></div><div>🏆 最近突破<br/><b>卧推 80kg</b></div></div>
<h2>Workout Log</h2>
{logs.map(x=><div className="log"><h3>{x.date} · {x.part}</h3><pre>{x.content}</pre><p>{x.note}</p></div>)}
<h2>🏆 Milestones</h2><div className="milestone">2026.09.05 卧推突破80kg<br/>经过持续训练，实现阶段性力量突破。</div>
<button>📄 查看 FitBuddy 腾讯文档档案</button>
</div>}
createRoot(document.getElementById('root')).render(<App/>);