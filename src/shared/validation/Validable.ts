import ValidationError from "./ValidationError";

export default abstract class Validable {
    
    private errors: Array<ValidationError>;
    
    constructor() {
      this.errors = [];
    }
  
    protected isRequired(value: any, property: string, message: string) {
      if(value) return;
      this.errors.push(new ValidationError(property, message));
    }

    protected isNotEquals(value: any, comparer: any, property: string, message: string) {
        if (value !== comparer) return;
        this.errors.push(new ValidationError(property, message));
    }

    protected isEquals(value: any, comparer: any, property: string, message: string) {
        if (value === comparer) return;
        this.errors.push(new ValidationError(property, message));
    }

    protected isLengthBetween(value: any, min: number, max: number, property: string, message: string) {
        if (value.length >= min && value.length <= max) return;
        this.errors.push(new ValidationError(property, message));
    }

    protected isMaxLength(value: any, max: number, property: string, message: string) {
        if (value.length <= max) return;
        this.errors.push(new ValidationError(property, message));
    }

    protected isMinLength(value: any, min: number, property: string, message: string) {
        if (value.length >= min) return;
        this.errors.push(new ValidationError(property, message));
    }
  
    protected isLengthEquals(value: any, compare: number, property: string, message: string) {
        if (value.length === compare) return;
        this.errors.push(new ValidationError(property, message));
    }
  
    protected isEmail(value: string, property: string, message: string) {
        const reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
        if (reg.test(value)) return;
        this.errors.push(new ValidationError(property, message));
    }

    protected isBetween(value: number, min: number, max: number, property: string, message: string) {
        if (value >= min && value <= max) return;
        this.errors.push(new ValidationError(property, message));
    }
  
    protected isGreaterThan(value: number, comparer: number, property: string, message: string) {
        if (value > comparer) return; 
        this.errors.push(new ValidationError(property, message));
    }

    protected isGreaterThanOrEqualTo(value: number, comparer: number, property: string, message: string) {
        if (value >= comparer) return;
        this.errors.push(new ValidationError(property, message));
    }

    protected isLessThan(value: number, comparer: number, property: string, message: string) {
        if (value < comparer) return;
        this.errors.push(new ValidationError(property, message));
    }

    protected isLessThanOrEqualTo(value: number, comparer: number, property: string, message: string) {
        if (value <= comparer) return;
        this.errors.push(new ValidationError(property, message)); 
    }

    protected isMust(value: boolean, validationName: string, message: string){
        if(value) return
        this.errors.push(new ValidationError(validationName, message));
    }

    public isValid() {
      return this.errors.length === 0;
    }
    public getErrors() {
        return this.errors.map((error) => {
            return { property: error.property, message: error.message};
      })
    }
    
  }