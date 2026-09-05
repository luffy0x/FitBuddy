export default function MilestoneCard({item}) {
  return <article className="milestone">
    <b>{item.date} 🏆 {item.title}</b>
    <p>{item.desc}</p>
    📷 成长记录照片
  </article>
}
