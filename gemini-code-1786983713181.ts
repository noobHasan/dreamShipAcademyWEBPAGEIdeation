// Core Data Models
interface ProductPlan {
  id: string; // e.g. "plan_dreamai_core"
  name: string; // "DreamAI Core"
  billing_type: "recurring_monthly" | "one_time";
  price_bdt: number; // 300
  grants: string[]; // ["dreamai.access", "dreamlabs.access", "practice.core"]
}

interface UserEntitlement {
  id: string;
  user_id: string;
  entitlement: string; // "dreamglobal.premium"
  source_type: "subscription" | "course_order" | "institutional_grant";
  source_id: string; // "sub_88319"
  is_active: boolean;
  expires_at: string | null;
}

// Client-side Gatekeeper Hook
function hasEntitlement(userEntitlements: string[], requiredKey: string): boolean {
  return userEntitlements.includes(requiredKey) || userEntitlements.includes("admin.all_access");
}