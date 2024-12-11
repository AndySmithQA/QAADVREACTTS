interface KelvinProps {
  value: number;
}

function Kelvin({ value }: KelvinProps) {
    return <div className="temp">{parseInt(value.toString() || '0') + 273.15}K</div>;
  }

export default Kelvin;

