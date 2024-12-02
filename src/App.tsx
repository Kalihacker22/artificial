import { useState } from 'react';
import { Route, Switch } from 'wouter';
import Navbar from './components/Navbar';
import Background from './components/Background';
import SearchBar from './components/SearchBar';
import ToolCard from './components/ToolCard';
import { tools } from './data/tools';
import { SearchFilters } from './types';

function App() {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    category: '',
    subcategory: '',
    pricing: ''
  });

  const filteredTools = tools.filter(tool => {
    const matchesQuery = tool.name.toLowerCase().includes(filters.query.toLowerCase()) ||
      tool.description.toLowerCase().includes(filters.query.toLowerCase()) ||
      tool.tags.some(tag => tag.toLowerCase().includes(filters.query.toLowerCase()));
    
    const matchesCategory = !filters.category || tool.category === filters.category;
    const matchesSubcategory = !filters.subcategory || tool.subcategory === filters.subcategory;
    const matchesPricing = !filters.pricing || tool.pricing === filters.pricing;
    
    return matchesQuery && matchesCategory && matchesSubcategory && matchesPricing;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Background />
      <Navbar />
      
      <main className="pt-24 pb-12 px-4">
        <Switch>
          <Route path="/">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  Discover Future Tools
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Explore our curated collection of cutting-edge AI tools and essential websites
                  that will revolutionize your workflow.
                </p>
              </div>
              
              <SearchBar filters={filters} setFilters={setFilters} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {filteredTools.map(tool => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </div>
          </Route>
          
          <Route path="/ai-tools">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">AI Tools</h2>
              <SearchBar filters={filters} setFilters={setFilters} />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {filteredTools
                  .filter(tool => tool.category === 'ai')
                  .map(tool => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
              </div>
            </div>
          </Route>
          
          <Route path="/websites">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">Useful Websites</h2>
              <SearchBar filters={filters} setFilters={setFilters} />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {filteredTools
                  .filter(tool => tool.category === 'website')
                  .map(tool => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
              </div>
            </div>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;