'use client';

import React from 'react';
import { useT } from '@gitroom/react/translation/get.transation.service.client';
import { Save } from 'lucide-react';
import { Button } from '@gitroom/react/form/button';

export const ProfileComponent = ({ name, email, setName, loading, onSubmit }: {
  name: string;
  email: string;
  setName(name: string): void;
  loading?: boolean;
  onSubmit?: () => void;
}) => {
  const t = useT();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('settings_profile_title', 'Profile Information')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('name', 'Name')}</label>
            <input
              type="text"
              name="fullname"
              value={name || ''}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('email_address', 'Email Address')}</label>
            <input
              type="email"
              disabled={true}
              value={email || ''}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="mt-8 pt-6">
          <div className="flex justify-start">
            <Button
              className="flex items-center space-x-2 px-4 py-2  rounded-lg hover:bg-violet-900 transition-colors"
              loading={loading}
              type="submit"
            >
              <Save className="w-4 h-4 mr-1" />
              <span>{t('save_changes', 'Save Changes')}</span>
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
