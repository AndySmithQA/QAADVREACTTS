interface FahrenheitProps {
    value: number;
  }

function Fahrenheit({ value }: FahrenheitProps) {
    return <div className="temp">{(parseInt(value.toString() || '0') * 9) / 5 + 32}°F</div>;
  }

  export default Fahrenheit;

