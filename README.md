# business-dashboard-P1
# Business Dashboard – Actionable KPIs

## Overview

This project implements a **Business Dashboard with Actionable KPIs** designed to help leadership teams make informed decisions rather than simply view static numbers. The dashboard provides real-time insights into revenue, profitability, customer growth, and operational efficiency with clear business context.

The solution includes:

* Clearly defined KPIs tied to business questions
* Interactive filters (date, region, product, department)
* Centralized data model and KPI logic
* Built-in data quality checks
* Actionable insights for leadership review

---

## Objective

Enable leadership to:

* Track business performance at a glance
* Identify underperforming regions or products
* Monitor profitability and efficiency
* Take concrete, data-driven actions during reviews and meetings

---

## Core KPIs

| KPI               | Definition                                    | Business Question Answered         |
| ----------------- | --------------------------------------------- | ---------------------------------- |
| **Revenue**       | Total income from all sales before deductions | Are we growing overall?            |
| **Profit**        | Revenue minus total expenses                  | Is growth sustainable?             |
| **Margin (%)**    | (Profit / Revenue) × 100                      | Are we operating efficiently?      |
| **Customers**     | Count of unique customers acquired            | Is customer acquisition improving? |
| **Orders**        | Total number of orders placed                 | Is demand increasing?              |
| **Target Status** | Revenue compared against target               | Are we on track this period?       |

Each KPI is calculated from a single, consistent data source to avoid discrepancies.

---

## Business Questions Answered

### 1. Which regions are underperforming?

* **Insight:** West region shows lower margins compared to the target.
* **Action:** Review operational and logistics costs in that region.

### 2. Is customer acquisition becoming more expensive?

* **Insight:** Customer acquisition cost has increased due to higher digital ad spend.
* **Action:** Re-evaluate marketing mix and optimize paid channels.

These insights are displayed directly in the **Business Questions & Actions** section of the dashboard.

---

## Filters Available

Users can slice data dynamically using:

* Date Range (start & end date)
* Region (North, South, East, West)
* Product (A–D)
* Department (Sales, Marketing, Operations, Finance)

All KPIs, charts, and insights update instantly based on selected filters.

---

## Data Model

### Data Source

* Mock transactional dataset (200 records)

### Grain

* Daily transaction level

### Key Fields

* Date
* Region
* Product
* Department
* Revenue
* Expenses
* Orders
* Customer ID

### KPI Logic

* Aggregations are performed centrally using a shared data context
* Revenue and expenses are summed at the filtered level
* Profit and margin are derived metrics
* Customers are calculated using unique customer IDs

This ensures a **single source of truth** across the dashboard.

---

## Data Quality Checks

The dashboard includes a dedicated **Data Quality** section displaying:

* Completeness (%)
* Accuracy (%)
* Timeliness
* Known data issues (missing or duplicate records)
* Last refresh timestamp

These checks help build trust in the numbers shown to stakeholders.

---

## Refresh Logic

* Metrics recalculate automatically whenever filters change
* Data quality metadata refreshes on each update
* Architecture supports future replacement of mock data with a real API or data warehouse

---

## Validation

* KPI calculations follow finance-style aggregation logic
* Metrics remain consistent across KPI cards and charts
* Centralized calculations prevent mismatched numbers

---

## Outcome

* KPIs are clearly tied to leadership-level business questions
* Dashboard supports real decision-making discussions
* Designed to be used in meetings and performance reviews

---

**Author:** Parveen Kumar Pasricha
