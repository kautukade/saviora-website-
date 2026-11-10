import React, { useState } from 'react';
import { SavioraLogo } from './SavioraLogo';
import { Send, CheckCheck, Sparkles, AlertTriangle, ShieldCheck, User, Stethoscope } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'patient' | 'assistant';
  text: string;
  time: string;
  isEscalation?: boolean;
}

const PRESET_QUESTIONS = [
  "Can I take Metformin on an empty stomach?",
  "I missed my morning blood pressure pill, should I take 2 tonight?",
  "I have a fever of 103°F and shivering, what should I do?",
];

export const PatientAiSimulator: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'assistant',
      text: "Hello Mr. Ramesh Patel. Here is your summary from Dr. Ananya Rao's consultation today: Metformin 500mg twice daily with meals & Telmisartan 40mg each morning. How can I assist you with your prescribed care plan?",
      time: '10:15 AM',
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'patient',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = '';
      let isEscalation = false;

      const lower = text.toLowerCase();
      if (lower.includes('empty stomach') || lower.includes('metformin')) {
        reply = "Dr. Rao's prescription specifically notes to take Metformin 500mg WITH or immediately after meals. Taking it on an empty stomach can cause stomach upset, nausea, or abdominal cramping. Always pair it with food.";
      } else if (lower.includes('missed') || lower.includes('2 tonight') || lower.includes('double')) {
        reply = "Do not take a double dose. If you missed your morning Telmisartan, take it as soon as you remember, unless it is close to your next scheduled dose. Never take two tablets together to make up for a missed dose.";
      } else if (lower.includes('fever') || lower.includes('103') || lower.includes('shivering') || lower.includes('chest pain')) {
        reply = "⚠️ Clinical Alert: A high fever of 103°F with shivering requires prompt medical evaluation. This inquiry has been flagged for Dr. Rao's team, and we recommend visiting the urgent care clinic immediately if symptoms worsen.";
        isEscalation = true;
      } else {
        reply = "Thank you for asking. Based on Dr. Rao's verified instructions, please continue taking your prescribed medications at the designated meal times. For any sudden changes in symptoms, please notify the clinic directly.";
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isEscalation,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="bg-slate-900 text-white rounded-2xl shadow-xl border border-slate-800 overflow-hidden max-w-xl mx-auto">
      
      {/* WhatsApp / Chat Header */}
      <div className="bg-slate-800/90 px-4 py-3 flex items-center justify-between border-b border-slate-700">
        <div className="flex items-center gap-3">
          <SavioraLogo size={28} />
          <div>
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>Dr. Rao's Clinic Assistant (Saviora)</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <div className="text-[10px] text-slate-300">Clinician-Supervised AI · Verified Knowledge Base</div>
          </div>
        </div>

        <div className="flex items-center gap-1 text-[11px] text-sky-400 bg-slate-900/60 px-2 py-1 rounded-md border border-slate-700">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Doctor Guardrails</span>
        </div>
      </div>

      {/* Chat Messages Body */}
      <div className="p-4 space-y-3 min-h-[300px] max-h-[380px] overflow-y-auto bg-slate-950/60">
        <div className="text-center">
          <span className="text-[10px] text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700">
            End-to-End Encrypted · Medical Advice Grounded in Doctor's Chart
          </span>
        </div>

        {messages.map((msg) => {
          const isUser = msg.sender === 'patient';
          return (
            <div
              key={msg.id}
              className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs ${
                  isUser
                    ? 'bg-blue-600 text-white rounded-tr-xs'
                    : msg.isEscalation
                    ? 'bg-red-950/80 border border-red-800 text-red-200 rounded-tl-xs'
                    : 'bg-slate-800 text-slate-100 border border-slate-700 rounded-tl-xs'
                }`}
              >
                <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                <div className="text-[9px] text-right mt-1 opacity-70 flex items-center justify-end gap-1">
                  <span>{msg.time}</span>
                  {isUser && <CheckCheck className="w-3 h-3 text-sky-300" />}
                </div>
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-800 text-slate-400 rounded-2xl rounded-tl-xs px-3 py-2 text-xs flex items-center gap-1.5 border border-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce delay-100"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce delay-200"></span>
              <span className="text-[10px] text-slate-300 ml-1">Consulting clinical guidelines...</span>
            </div>
          </div>
        )}
      </div>

      {/* Suggested Quick Question Prompts */}
      <div className="p-3 bg-slate-900 border-t border-slate-800 space-y-1.5">
        <div className="text-[11px] font-semibold text-slate-300">Try common patient follow-up queries:</div>
        <div className="flex flex-wrap gap-1.5">
          {PRESET_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => sendMessage(q)}
              className="text-[11px] text-left px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg border border-slate-700 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Input Bar */}
      <div className="p-3 bg-slate-800/80 border-t border-slate-700 flex gap-2">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') sendMessage(inputVal);
          }}
          placeholder="Type a patient question (e.g. dosage, food timing)..."
          className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={() => sendMessage(inputVal)}
          disabled={!inputVal.trim()}
          className="p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg disabled:opacity-40 transition-colors"
          aria-label="Send query"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
