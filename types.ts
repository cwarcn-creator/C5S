
export type ThemeColor = 'blue' | 'red' | 'green' | 'purple' | 'orange';
export type ProductCategory = 'Stones' | 'Materials';
export type StoneCategory = 'Marble' | 'Granite';
export type StoneForm = 'Slab' | 'Tiles' | 'Strip';
export type MaterialType = 'Adhesives' | 'Tools' | 'Consumables' | 'General';
export type PaymentType = 'Cash' | 'Credit' | 'Partial';
export type InvoiceStatus = 'draft' | 'confirmed';
export type ExpenseCategory = 'Salaries' | 'StaffAdvance' | 'Rent' | 'Electricity' | 'Maintenance' | 'Hospitality' | 'Other' | 'PurchaseOverhead';
export type CustomerType = 'Individual' | 'Craftsman' | 'Contractor' | 'Company' | 'Factory';
export type SupplierType = 'Company' | 'Factory';
export type SupplierSource = 'Local' | 'International';
export type LaborCalculationType = 'linear' | 'square' | 'perimeter' | 'complementary';
export type WorkOrderStatus = 'pending' | 'in_progress' | 'completed' | 'delivered';
export type EmployeeType = 'employee' | 'craftsman';
export type PayPeriod = 'monthly' | 'weekly' | 'daily';
export type StaffTransactionType = 'salary_accrual' | 'commission' | 'loan_taken' | 'wage_payment' | 'loan_repayment' | 'opening_balance';

export interface AppSettings {
  darkMode: boolean;
  themeColor: ThemeColor;
  currency: string;
}

export interface InventoryItem {
  id: string;
  sku: string;
  category: ProductCategory;
  name: string;
  stoneCategory?: StoneCategory;
  stoneForm?: StoneForm;
  materialType?: MaterialType;
  length?: number;
  width?: number;
  thickness?: number;
  count: number;
  totalSqM?: number;
  purchasePrice: number;
  overheadCost: number;
  finalCost: number;
  sellPrice: number;
  totalValue: number;
}

export interface PerimeterConfig {
  lengthSides: 0 | 1 | 2;
  lengthDir?: 'Right' | 'Left';
  widthSides: 0 | 1 | 2;
  widthDir?: 'Right' | 'Left';
  lengthEnabled?: boolean;
  widthEnabled?: boolean;
  complementarySize?: number;
}

export interface AppliedService {
  serviceId: string;
  name: string;
  type: LaborCalculationType;
  price: number;
  totalCost: number;
  config?: PerimeterConfig;
}

export interface ItemMeasurement {
  id: number;
  length: number;
  width: number;
  count: number;
  sqM: number;
  services?: AppliedService[];
  servicesTotal?: number;
}

export interface InvoiceLineItem {
  id: string;
  inventoryItemId: string;
  sku: string;
  name: string;
  category: ProductCategory;
  stoneCategory?: StoneCategory;
  length?: number;
  width?: number;
  thickness?: number;
  count: number;
  totalSqM?: number;
  cost: number;
  price: number;
  total: number;
  description?: string;
  measurements?: ItemMeasurement[];
}

export interface InstallationEntry {
  id: string;
  description: string;
  label?: string;
  rate?: number;
  price: number;
  linkedMeasurementIds: number[];
}

export interface Invoice {
  id: string;
  status: InvoiceStatus;
  customerId: string;
  customerName: string;
  date: string;
  items: InvoiceLineItem[];
  installations?: InstallationEntry[];
  subTotal: number;
  discount: number;
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  paymentType: PaymentType;
  notes?: string;
}

export interface Customer {
  id: string;
  name: string;
  phone?: string;
  address?: string;
  type?: CustomerType;
  balance: number;
}

export interface Supplier {
  id: string;
  name: string;
  phone?: string;
  address?: string;
  type?: SupplierType;
  source?: SupplierSource;
  balance: number;
}

export interface Transaction {
  id: string;
  type: 'expense' | 'receipt' | 'payment';
  amount: number;
  date: string;
  description?: string;
  expenseCategory?: ExpenseCategory;
  partnerId?: string;
  partnerType?: 'Customer' | 'Supplier';
  invoiceId?: string;
}

export interface InvoiceExpense {
  id: string;
  description: string;
  amount: number;
}

export interface PurchaseItem {
  id: string;
  category: ProductCategory;
  name: string;
  stoneCategory?: StoneCategory;
  stoneForm?: StoneForm;
  materialType?: MaterialType;
  length?: number;
  width?: number;
  thickness?: number;
  count: number;
  totalSqM?: number;
  basePrice: number;
  finalCostPerUnit: number;
  suggestedSellPrice: number;
  totalRowCost: number;
}

export interface PurchaseInvoice {
  id: string;
  status: InvoiceStatus;
  supplierId: string;
  supplierName: string;
  date: string;
  items: PurchaseItem[];
  expenses: InvoiceExpense[];
  totalGoodsValue: number;
  totalExpensesValue: number;
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  paymentType: PaymentType;
  notes?: string;
}

export interface LaborService {
  id: string;
  name: string;
  type: LaborCalculationType;
  price: number;
  craftsmanShare: number;
  targetMaterial?: StoneCategory;
}

export interface ProductionOutputItem {
  name: string;
  stoneForm: StoneForm;
  length: number;
  width: number;
  thickness: number;
  count: number;
  totalSqM: number;
  suggestedSellPrice: number;
}

export interface ProductionOrder {
  id: string;
  date: string;
  inputItemName: string;
  inputCount: number;
  inputTotalValue: number;
  outputs: { name: string; count: number; totalSqM: number }[];
  operationalCost: number;
  totalCost: number;
  wastePercentage: number;
  newCostPerSqM: number;
  status: 'completed';
}

export interface WorkOrder {
  id: string;
  invoiceId: string;
  customerName: string;
  date: string;
  status: WorkOrderStatus;
  items: {
    itemName: string;
    measurements: ItemMeasurement[];
  }[];
  summary: {
    marbleCuttingMeters: number;
    graniteCuttingMeters: number;
    marbleServices: { serviceName: string; quantity: number; unit: string }[];
    graniteServices: { serviceName: string; quantity: number; unit: string }[];
  };
  craftsmanId?: string;
  craftsmanShareApplied?: number;
}

export interface EmployeeHistoryItem {
  date: string;
  type: StaffTransactionType;
  description: string;
  amount: number;
}

export interface Employee {
  id: string;
  name: string;
  type: EmployeeType;
  role: string;
  salary?: number;
  payPeriod?: PayPeriod;
  lastPayDate?: string;
  balance: number;
  history: EmployeeHistoryItem[];
}
