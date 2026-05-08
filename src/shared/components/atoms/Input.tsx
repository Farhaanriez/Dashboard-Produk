import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

// forwardRef diperlukan kalau kita mau akses input element dari parent
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = '', ...props }, ref) => {
    
    const inputClasses = `
      w-full px-4 py-2 
      border rounded-lg
      transition-colors
      focus:outline-none focus:ring-2 focus:ring-blue-500
      disabled:bg-gray-100 disabled:cursor-not-allowed
      ${error ? 'border-red-500' : 'border-gray-300'}
      ${className}
    `;
    
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        
        <input
          ref={ref}
          className={inputClasses}
          {...props}
        />
        
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
        
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';