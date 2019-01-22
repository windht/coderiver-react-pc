import styles from './DownloadMobile.less';
import qrImage from '../../../assets/images/home/qr.png';

export default function DownloadMobile() {
  return (
    <div className={styles.downloadCta}>
      <h3>下载移动端</h3>
      <div className={styles.qrRow}>
        <div className={styles.qrBox}>
          <div className={styles.qrHead}>
            <div className={styles.qrHeadtitle}>iOS版</div>
            <img src={qrImage} />
          </div>
        </div>
        <div className={styles.qrBox}>
          <div className={styles.qrHead}>
            <div className={styles.qrHeadtitle}>Android版</div>
            <img src={qrImage} />
          </div>
        </div>
        <div className={styles.downloadBg}>
          <img />
        </div>
        <div className={styles.downloadMobileScreen}>
          <img />
        </div>
      </div>
    </div>
  );
}
