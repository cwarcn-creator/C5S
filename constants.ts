
import { ThemeColor, InventoryItem, Customer, Supplier, Transaction, Invoice, PurchaseInvoice, LaborService, Employee, WorkOrder } from "./types";

export const THEME_COLORS: Record<ThemeColor, { primary: string; name: string }> = {
  blue: { primary: '37 99 235', name: 'أزرق أساسي' },
  red: { primary: '220 38 38', name: 'أحمر قرمزي' },
  green: { primary: '22 163 74', name: 'أخضر غابة' },
  purple: { primary: '147 51 234', name: 'بنفسجي ملكي' },
  orange: { primary: '234 88 12', name: 'برتقالي غروب' },
};

export const SUPPORTED_CURRENCIES = [
  { code: 'LYD', name: 'دينار ليبي' },
  { code: 'USD', name: 'دولار أمريكي' },
  { code: 'SAR', name: 'ريال سعودي' },
  { code: 'AED', name: 'درهم إماراتي' },
  { code: 'EGP', name: 'جنيه مصري' },
  { code: 'EUR', name: 'يورو' },
];

export const EXPENSE_CATEGORIES = [
  { id: 'Salaries', label: 'رواتب وأجور' },
  { id: 'StaffAdvance', label: 'سلف وعُهد' },
  { id: 'Rent', label: 'إيجار' },
  { id: 'Electricity', label: 'كهرباء ومياه' },
  { id: 'Maintenance', label: 'صيانة وتشغيل' },
  { id: 'Hospitality', label: 'ضيافة ونثريات' },
  { id: 'Other', label: 'مصروفات أخرى' },
  { id: 'PurchaseOverhead', label: 'مصاريف توريد بضاعة' },
];

// --- CLEAN INITIAL DATA ---

export const INITIAL_INVENTORY: InventoryItem[] = [];

export const INITIAL_CUSTOMERS: Customer[] = [];

export const INITIAL_SUPPLIERS: Supplier[] = [];

export const INITIAL_TRANSACTIONS: Transaction[] = [];

export const INITIAL_LABOR_SERVICES: LaborService[] = [
    { id: 'ls-1', name: 'قص مستقيم', type: 'linear', price: 10, craftsmanShare: 4, targetMaterial: 'Granite' },
    { id: 'ls-2', name: 'جلي وتلميع رخام', type: 'square', price: 25, craftsmanShare: 10, targetMaterial: 'Marble' },
    { id: 'ls-3', name: 'برم (Bullnose)', type: 'perimeter', price: 18, craftsmanShare: 7 },
    { id: 'ls-4', name: 'شطف (Chamfer)', type: 'perimeter', price: 12, craftsmanShare: 5 },
];

export const INITIAL_SALES: Invoice[] = [];

export const INITIAL_PURCHASES: PurchaseInvoice[] = [];

export const INITIAL_EMPLOYEES: Employee[] = [];

export const INITIAL_WORK_ORDERS: WorkOrder[] = [];
