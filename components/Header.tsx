import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export const Header = () => {
  return (
    <Grid style={{ height: 100 }} container display={"flex"}>
      <Grid
        container
        xs={3}
        flexDirection="row"
        style={{ paddingLeft: 60, paddingTop: 23 }}
      >
        <Grid item>
          <Image
            alt="Ensabill-logo"
            src={"/ensabill-logo.png"}
            width={56}
            height={51}
          />
        </Grid>
        <div>
        <p style={{ fontFamily: "Roboto", color: "white", fontWeight: "400", fontSize: "30px", marginTop: 15 }} >
          ensa
        </p>
        </div>
        <p style={{ fontFamily: "Roboto", color: "white", fontWeight: "300", fontSize: "30px", marginTop: 15 }}>
          bill
        </p>
      </Grid>
      <Grid
        container
        xs={8}
        flexDirection="row"
        justifyContent={"space-between"}
        paddingTop={"10px"}
        fontFamily="Roboto"
        fontWeight={400}
        fontSize={"25px"}
        color="white"
      >
        <Grid item xs={2} paddingTop={3}>
          <Link href="/">
            <a className={styles.headerLink}>Home</a>
          </Link>
          <div></div>
        </Grid>
        <Grid item xs={2} paddingTop={3}>
          <Link href="/">
            <a className={styles.headerLink}>Banks</a>
          </Link>
        </Grid>
        <Grid item xs={3} paddingTop={3}>
          <Link href="/">
            <a className={styles.headerLink}>Machine Learning</a>
          </Link>
        </Grid>
        <Grid item xs={2} paddingTop={3}>
          <Link href="/">
            <a className={styles.headerLink}>About us</a>
          </Link>
        </Grid>
        <Grid item xs={2} paddingTop={3}>
          <Link href="/">
            <a className={styles.headerLink}>Contact Us</a>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};
