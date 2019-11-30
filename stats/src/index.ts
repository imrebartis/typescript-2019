import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { HtmlReport } from "./reportTargets/HtmlReport";

// create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader("football.csv");
// create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport("Leicester");
summary.buildAndPrintReport(matchReader.matches);
