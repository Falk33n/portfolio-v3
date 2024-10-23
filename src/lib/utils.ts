import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * This function takes any number of class names (or objects representing class conditions),
 * processes them with `clsx` to resolve conditional class names, and then merges them
 * using `twMerge` to avoid conflicts with Tailwind's utility classes.
 *
 * @param {...ClassValue[]} inputs - A list of class names, objects, or arrays of class names
 * that `clsx` can process. Each input can be a string, array, or object where the keys are class
 * names and the values are booleans indicating whether to include the class.
 * @returns {string} The final computed class string after merging.
 */

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
