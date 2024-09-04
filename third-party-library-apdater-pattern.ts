// Third-party library
class ComplexChartLibrary {
  draw(data: Array<{ x: number, y: number }>) {
    // complex drawing logic
  }
}

// Adapter
class ChartAdapter {
  constructor(private chartLibrary: ComplexChartLibrary) {}

  draw(data: { [key: string]: number }) {
    const transformedData = Object.entries(data).map(([x, y]) => ({ x: Number(x), y }));
    this.chartLibrary.draw(transformedData);
  }
}

// Usage
const chartLibrary = new ComplexChartLibrary();
const chartAdapter = new ChartAdapter(chartLibrary);
chartAdapter.draw({ '1': 2, '3': 4, '5': 6 });