import { format } from "date-fns";

function generateMockData() {
  const regions = ["North", "South", "East", "West"];
  const products = ["Product A", "Product B", "Product C", "Product D"];
  const departments = ["Sales", "Marketing", "Operations", "Finance"];

  let data = [];
  let date = new Date("2025-12-01");
  let customerId = 1000;

  for (let i = 0; i < 200; i++) {
    const region = regions[Math.floor(Math.random() * regions.length)];
    const product = products[Math.floor(Math.random() * products.length)];
    const department = departments[Math.floor(Math.random() * departments.length)];
    const revenue = Math.floor(Math.random() * 5000) + 1000;
    const expenses = revenue * (0.6 + Math.random() * 0.3);
    const orders = Math.floor(Math.random() * 5) + 1;

    data.push({
      id: i + 1,
      date: format(new Date(date), "yyyy-MM-dd"),
      region,
      product,
      department,
      revenue,
      expenses,
      profit: revenue - expenses,
      orders,
      customerId: customerId++,
      satisfaction: 3.5 + Math.random() * 1.5,
    });

    date.setDate(date.getDate() + 1);
  }

  return data;
}

export const mockDataService = {
  rawData: generateMockData(),

  getFilteredData(filters) {
    let data = [...this.rawData];

    if (filters.dateRange) {
      data = data.filter(
        (item) =>
          item.date >= filters.dateRange.start &&
          item.date <= filters.dateRange.end
      );
    }

    if (filters.region && filters.region !== "All") {
      data = data.filter((item) => item.region === filters.region);
    }

    if (filters.product && filters.product !== "All") {
      data = data.filter((item) => item.product === filters.product);
    }

    if (filters.department && filters.department !== "All") {
      data = data.filter((item) => item.department === filters.department);
    }

    return data;
  },

  calculateKPIs(data) {
    const revenue = data.reduce((sum, item) => sum + item.revenue, 0);
    const expenses = data.reduce((sum, item) => sum + item.expenses, 0);
    const profit = revenue - expenses;
    const totalOrders = data.reduce((sum, item) => sum + item.orders, 0);
    const totalCustomers = new Set(data.map((item) => item.customerId)).size;

    return [
      {
        id: 1,
        name: "Revenue",
        value: `$${(revenue / 1000).toFixed(1)}K`,
        change: "5.2%",
        isPositive: true,
        definition: "Total income from sales before deductions",
        target: "$500K",
        status: revenue >= 500000 ? "On Target" : "Below Target",
      },
      {
        id: 2,
        name: "Profit",
        value: `$${(profit / 1000).toFixed(1)}K`,
        change: "12.5%",
        isPositive: true,
        definition: "Revenue minus all expenses",
        target: "$200K",
        status: profit >= 200000 ? "On Target" : "Below Target",
      },
      {
        id: 3,
        name: "Customer Acquisition",
        value: totalCustomers.toString(),
        change: "8.3%",
        isPositive: true,
        definition: "Number of new customers acquired",
        target: "150",
        status: totalCustomers >= 150 ? "On Target" : "Below Target",
      },
      {
        id: 4,
        name: "Order Volume",
        value: totalOrders.toString(),
        change: "15.2%",
        isPositive: true,
        definition: "Total number of orders placed",
        target: "1,200",
        status: totalOrders >= 1200 ? "On Target" : "Below Target",
      },
    ];
  },

  getBusinessQuestions() {
    return [
      {
        id: 1,
        question: "Which regions are underperforming?",
        answer: "West region shows 18% margin vs 25% target.",
        actionable: "Review operational costs in West region.",
      },
      {
        id: 2,
        question: "Is customer acquisition cost increasing?",
        answer: "CAC increased by 15% due to digital ads.",
        actionable: "Review marketing strategy for cost optimization.",
      },
    ];
  },

  checkDataQuality() {
    return {
      completeness: "98%",
      accuracy: "99.5%",
      timeliness: "Real-time",
      issues: ["3 missing customer records", "2 duplicate transactions"],
      lastRefreshed: new Date().toISOString(),
    };
  },
};
