export default () => <table>
  <thead>
    <tr>
      <th>name</th>
      <th>desc</th>
    </tr>
  </thead>

  <tbody>
    {Features.find().fetch().map(({ name, desc }, collectionIdx) => <tr key={collectionIdx}>
      <td>{name}</td>
      <td>{desc}</td>
    </tr>)}
  </tbody>
</table>
