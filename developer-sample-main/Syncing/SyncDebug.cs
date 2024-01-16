using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeveloperSample.Syncing
{
    public class SyncDebug
    {
        public List<string> InitializeList(IEnumerable<string> items)
        {
            var bag = new ConcurrentBag<string>();

            Parallel.ForEach(items, i =>
            {
                var r = Task.Run(() => i).Result; // Wait for the task to complete
                bag.Add(r);
            });

            return bag.ToList();
        }

        

        public Dictionary<int, string> InitializeDictionary(Func<int, string> getItem)
        {
            var itemsToInitialize = Enumerable.Range(0, 100).ToList();

            var concurrentDictionary = new ConcurrentDictionary<int, string>();

            Parallel.ForEach(itemsToInitialize, item =>
            {
                concurrentDictionary.AddOrUpdate(item, getItem, (_, s) => s);
            });

            return concurrentDictionary.ToDictionary(kv => kv.Key, kv => kv.Value);
        }
    }
}
