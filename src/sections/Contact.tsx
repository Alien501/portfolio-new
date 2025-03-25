'use client'

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        query: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateField = (name: string, value: string) => {
        let error = '';
        switch (name) {
            case 'name':
                if (!value.trim()) error = 'Name is required';
                else if (value.length < 3) error = 'Name must be at least 3 characters';
                break;
            case 'email':
                if (!value.trim()) error = 'Email is required';
                else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) 
                    error = 'Invalid email address';
                break;
            case 'query':
                if (!value.trim()) error = 'Query is required';
                else if (value.length < 10) error = 'Query must be at least 10 characters';
                break;
        }
        return error;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));  
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Record<string, string> = {};

        Object.entries(formData).forEach(([name, value]) => {
            const error = validateField(name, value.toString());
            if (error) newErrors[name] = error;
        });

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        setIsSubmitting(true);
        try {
            const form = new FormData();
            form.append('name', formData.name);
            form.append('email', formData.email);
            form.append('response', formData.query);

            const res = await fetch(
                'https://script.google.com/macros/s/AKfycbyXnvWBctTilJ4Hg_7fNfc8u9QpAliiU18CiHy0veP08VBwZmGU55zQQ3klMgOZcF0uAw/exec',
                {
                    method: 'POST',
                    body: form
                }
            );

            if (!res.ok) throw new Error('Submission failed');
            
            setFormData({ name: '', email: '', query: '' });
            setErrors({});
            alert('Your response has been submitted successfully!');
        } catch (error) {
            console.error(error);
            alert('Something went wrong, couldn\'t submit your request!');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="md:h-[200px] lg:h-[400px] p-6 rounded-lg shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col gap-1">
                    <label className="text-sm text-primary-dark/80 font-untitle-sans-medium" htmlFor="name">
                        Name
                    </label>
                    <input
                        className={`border-[1px] h-[40px] bg-[rgba(199,211,234,0.06)] px-3 rounded-md 
                            ${errors.name ? 'border-red-500/50' : 'border-primary-light/12'}
                            focus:outline-none focus:border-primary-light/30 transition-colors
                            placeholder:text-primary-dark/30`}
                        placeholder="Enter your name"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={(e) => setErrors(prev => ({ ...prev, name: validateField('name', e.target.value) }))}
                    />
                    {errors.name && <span className="text-red-500/80 text-xs">{errors.name}</span>}
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm text-primary-dark/80 font-untitle-sans-medium" htmlFor="email">
                        Email
                    </label>
                    <input
                        className={`border-[1px] h-[40px] bg-[rgba(199,211,234,0.06)] px-3 rounded-md 
                            ${errors.email ? 'border-red-500/50' : 'border-primary-light/12'}
                            focus:outline-none focus:border-primary-light/30 transition-colors
                            placeholder:text-primary-dark/30`}
                        placeholder="Enter your email"
                        name="email"
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={(e) => setErrors(prev => ({ ...prev, email: validateField('email', e.target.value) }))}
                    />
                    {errors.email && <span className="text-red-500/80 text-xs">{errors.email}</span>}
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm text-primary-dark/80 font-untitle-sans-medium" htmlFor="query">
                        Query
                    </label>
                    <textarea
                        className={`border-[1px] min-h-[100px] bg-[rgba(199,211,234,0.06)] px-3 py-2 rounded-md 
                            ${errors.query ? 'border-red-500/50' : 'border-primary-light/12'}
                            focus:outline-none focus:border-primary-light/30 transition-colors resize-none
                            placeholder:text-primary-dark/30`}
                        placeholder="Enter your query"
                        name="query"
                        id="query"
                        value={formData.query}
                        onChange={handleInputChange}
                        onBlur={(e) => setErrors(prev => ({ ...prev, query: validateField('query', e.target.value) }))}
                    />
                    {errors.query && <span className="text-red-500/80 text-xs">{errors.query}</span>}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full h-[40px] cursor-pointer rounded-full bg-gradient-to-r from-primary-light/10 to-primary-dark/10 
                        hover:from-primary-light/20 hover:to-primary-dark/20 transition-all
                        ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
                        relative overflow-hidden`}
                >
                    {isSubmitting ? (
                        <span className="text-primary-dark/60">Submitting...</span>
                    ) : (
                        <span className="text-primary-dark/80 font-untitle-sans-medium">Submit</span>
                    )}
                </button>
            </form>
        </div>
    )
}