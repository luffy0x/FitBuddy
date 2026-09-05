export default function WorkoutCard({workout}) {
  return <article className="log">
    <h3>{workout.date} · {workout.part}</h3>
    <pre>{workout.content}</pre>
    <p>{workout.note}</p>
    <div className="photo">{workout.photo}</div>
  </article>
}
