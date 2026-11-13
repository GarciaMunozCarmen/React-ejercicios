function BarraProgreso({ porcentaje }) {
  return (
    <div className="border-solid border-2">
      <div style={{ backgroundColor: "orange", width: `${porcentaje}%` }}>
        <p>{porcentaje}/100</p>
      </div>
    </div>
  );
}
 
export default BarraProgreso;