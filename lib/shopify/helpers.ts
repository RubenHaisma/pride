export function isObject(object: any): boolean {
    return typeof object === 'object' && object !== null && !Array.isArray(object);
  }
  
  export function isShopifyError(error: any): boolean {
    if (!isObject(error)) {
      return false;
    }
  
    if (!error.message || typeof error.message !== 'string') {
      return false;
    }
  
    return true;
  }