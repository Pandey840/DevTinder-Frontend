import {toast} from 'sonner';
import {
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
  FaExclamationTriangle,
} from 'react-icons/fa';

const showToast = (type, message, description = '') => {
  const styles = {
    success: {
      icon: <FaCheckCircle className="text-xl text-green-500" />,
      borderColor: 'rgba(34, 197, 94, 0.8)',
    },
    error: {
      icon: <FaTimesCircle className="text-xl text-red-500" />,
      borderColor: 'rgba(239, 68, 68, 0.8)',
    },
    info: {
      icon: <FaInfoCircle className="text-xl text-blue-500" />,
      borderColor: 'rgba(59, 130, 246, 0.8)',
    },
    warning: {
      icon: <FaExclamationTriangle className="text-xl text-yellow-500" />,
      borderColor: 'rgba(234, 179, 8, 0.8)',
    },
  };

  const selectedStyle = styles[type] || styles.info;

  toast(message, {
    description,
    icon: selectedStyle.icon,
    duration: 3000,
    style: {
      background: 'rgba(20, 20, 20, 0.8)',
      color: '#fff',
      borderRadius: '12px',
      padding: '16px',
      backdropFilter: 'blur(8px)',
      border: `2px solid ${selectedStyle.borderColor}`,
      boxShadow: `0 4px 10px ${selectedStyle.borderColor}`,
    },
  });
};

export const success = (message, description = '') =>
  showToast('success', message, description);
export const error = (message, description = '') =>
  showToast('error', message, description);
export const info = (message, description = '') =>
  showToast('info', message, description);
export const warning = (message, description = '') =>
  showToast('warning', message, description);
