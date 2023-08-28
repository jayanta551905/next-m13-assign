export default function ApiPage() {
  const jsonData = {
    message: "Welcome to our API!",
    version: "1.0",
  };

  return (
    <div>
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  );
}
