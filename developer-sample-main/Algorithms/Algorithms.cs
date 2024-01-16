using System;
using System.Text;

namespace DeveloperSample.Algorithms
{
    public static class Algorithms
    {
        public static int GetFactorial(int n)
        {
            if (n <= 1) return 1;
    
            int result = 1;
            for (int i = 2; i <= n; i++)
            {
                unchecked
                {
                    result *= i;
                }
            }
            return result;
        }

        public static string FormatSeparators(params string[] items)
        {
            if (items == null || items.Length == 0)
                return string.Empty;

            StringBuilder result = new StringBuilder(items[0]);
            int lastItem = items.Length - 1;
            
            for (int i = 1; i < lastItem; i++)
            {
                result.Append(", ");
                result.Append(items[i]);
            }
            
            result.Append(" and ");
            result.Append(items[lastItem]);

            return result.ToString();
        }
    }
}