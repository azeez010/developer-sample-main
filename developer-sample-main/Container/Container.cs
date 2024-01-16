using System;
using System.Collections.Generic;


namespace DeveloperSample.Container
{
    
    
    public class Container
    {
        // public void Bind(Type interfaceType, Type implementationType) => throw new NotImplementedException();
        // public T Get<T>() => throw new NotImplementedException();
        private readonly Dictionary<Type, Type> _bindings = new Dictionary<Type, Type>();

        public void Bind(Type serviceType, Type implementationType)
        {
            if (!serviceType.IsAssignableFrom(implementationType))
            {
                throw new InvalidOperationException($"{implementationType} must implement {serviceType}");
            }

            _bindings[serviceType] = implementationType;
        }

        public T Get<T>()
        {
            Type serviceType = typeof(T);

            if (!_bindings.TryGetValue(serviceType, out Type implementationType))
            {
                throw new InvalidOperationException($"Service not registered for {serviceType}");
            }

            return (T)Activator.CreateInstance(implementationType);
        }
    }
}