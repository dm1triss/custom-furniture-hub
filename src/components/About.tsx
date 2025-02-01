import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">О нашей компании</h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Мы создаем уникальную мебель, которая отражает ваш стиль и соответствует вашим потребностям. 
              Наша команда опытных мастеров использует только лучшие материалы и современные технологии.
            </p>
            <ul className="space-y-4">
              {[
                "Индивидуальный подход к каждому заказу",
                "Гарантия качества 2 года",
                "Бесплатный дизайн-проект",
                "Доставка и установка"
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2"
                >
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px]"
          >
            <img
              src="https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&q=80"
              alt="Our workshop"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
