import Navigation from "@/components/Navigation";
import styles from "@/app/dashboard/dashboard.module.css";

export default function DashboardLayout({ children }) {
  return (
    <html>
      <body>
        <div className={styles.dashboardContainer}>
          <Navigation />
          <div className={styles.content}>
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
